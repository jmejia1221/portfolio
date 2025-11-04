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
        const length = db.length;

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ length, data: db }));
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Internal server error' }));
    }
};

export default projects;