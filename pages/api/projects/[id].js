import DB from '../../../database/projects.json';

const projects = async(req, res) => {
    // Only allow GET requests
    if (req.method !== 'GET') {
        res.statusCode = 405;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Method not allowed' }));
        return;
    }

    try {
        const db = await DB;
        const id = req.query.id;

        // Input validation and sanitization
        if (!id || typeof id !== 'string') {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'Invalid or missing project ID' }));
            return;
        }

        // Sanitize input - only allow alphanumeric characters and hyphens
        const sanitizedId = id.replace(/[^a-zA-Z0-9-]/g, '');

        if (sanitizedId !== id) {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'Project ID contains invalid characters' }));
            return;
        }

        const dbById = db.filter(item => {
            return item.id === sanitizedId;
        });

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ length: dbById.length, data: dbById }));
    } catch (error) {
        console.error('Error fetching project:', error);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Internal server error' }));
    }
};

export default projects;