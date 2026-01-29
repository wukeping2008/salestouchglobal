import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import naRoutes from './routes/naRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3100;

app.use(cors());
app.use(express.json());

// North American routes
app.use('/api/na', naRoutes);

// Basic health check
app.get('/api/health', (req, res) => {
    res.json({
        status: 'healthy',
        region: 'North America (Global)',
        provider: process.env.AI_PROVIDER || 'mock'
    });
});

// Mock AI Endpoint for Landing Page / Simulation
app.post('/api/ai/simulate', async (req, res) => {
    const { message, context } = req.body;
    const provider = process.env.AI_PROVIDER || 'mock';

    console.log(`Processing request with provider: ${provider}`);

    // In a real scenario, we'd call Azure OpenAI or Claude here
    if (provider === 'mock') {
        res.json({
            reply: `[AI Sales Coach]: I see you're working on ${context?.industry || 'Unknown'} sector. Based on SPIN method, your next question should focus on on "Implication" of their current manual process.`,
            suggestions: [
                "Ask about resource drain",
                "Ask about missed opportunity costs",
                "Pivot to need-payoff"
            ]
        });
    } else {
        // Placeholder for real AI integration
        res.json({
            reply: `[AI Sales Coach (${provider})]: Analysis in progress. Connect your API keys to see real-time logic.`,
            suggestions: ["Check API configuration"]
        });
    }
});

app.listen(port, () => {
    console.log(`SalesTouch Overseas Backend running on http://localhost:${port}`);
});
