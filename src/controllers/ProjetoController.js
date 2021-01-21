const knex = require('../database')

module.exports = {
    async index(req, res, next) { 
        try {
            const { user_id, page = 1 } = req.query;

            const query = knex('projetos')
            .limit(5)
            .offset((page - 1) * 5)

            const countObj = knex('projetos').count()

            
            if  (user_id) {
                query
                .where({ user_id })
                .join('usuarios', 'usuarios.id', '=', 'projects.user_id')
                .select('projects.*', 'usuarios.username')
                .where('usuarios.deleted_at', null)

                countObj
                .where({ user_id })                
            }

            const [count] = await countObj
            res.header('X-Total-Count', count["count"] )

            const results = await query
            
            return res.json(results)
        } catch (error) {
            next(error)
        }
    },
    async create(req, res, next) {
        try {
            const { title, user_id } = req.body

            await knex('projetos').insert({
                title,
                user_id
            })

            return res.status(201).send()
        } catch (error) {
            next(error)
        }
    }
}