import { FastifyRequest, FastifyReply } from 'fastify';
import { generateAuthUrl } from '../utils/googleAuth';
import { google } from 'googleapis';
import dotenv from 'dotenv';

dotenv.config();
console.log("Proces    : "+process.env.CLIENT_ID)


export const oauth2Client = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET,process.env.REDIRECT_URL);

export const login = async (req: FastifyRequest, res: FastifyReply): Promise<void> => {
    try {
        const url = await generateAuthUrl();
        res.redirect(url);
    } catch (error) {
        console.error('Error generating authentication URL:', error);
        res.status(500).send({ error: 'Failed to generate authentication URL' });
    }
};

export const callback = async (req: any, res: any): Promise<void> => {
    // try {
        
    //     // handle callback logic
    //     res.send({ msg: 'Callback logic executed successfully' });
    // } catch (error) {
    //     console.error('Error processing callback:', error);
    //     res.status(500).send({ error: 'Failed to process callback' });
    // }


    console.log("Inside of fastify get -> /callback");

    const code = req.query.code;
    console.log("code -> " + code);


    try {
        const { tokens } = await oauth2Client.getToken(code);
        oauth2Client.setCredentials(tokens);
        // res.send({
        //     msg: "Successfully Log in ",
        // });
        res.redirect("http://localhost:4000/graphiql");
    } catch (error) {
        console.error("Error getting tokens:", error);
        res.status(500).send({ error: "Failed to authenticate user" });
    }
};
