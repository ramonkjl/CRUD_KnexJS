const { create } = require('domain');
const { update, delete } = require('../database');
const knex = require('../database');

module.exports = {
    //SELECT
    async index(req, res) { 
        const results = await knex('usuarios')
        return res.json(results)
    },

    //INSERT
    async create(req, res, next){
        try {
            //Caso o usuario mande dados a mais, pega só o dado que importa
            const { username } = req.body
            
            await knex('usuarios').insert({
                username
            })

            return res.status(201).send()
        } catch (error) {
            next(error)
        }
    },

    //UPDATE
    async update(req, res, next){
        try {
            const { username } = req.body
            const { id } = req.params

            await knex('usuarios').update({ username }).where({ id })

            return res.send()

        } catch (error) {
            next(error)
        }
    },

    //DELETE
    async delete(req, res, next){
        try {
            const { id } = req.params
            await knex('usuarios').where({ id }).del()

            return res.send();
        } catch (error) {
            next(error)
        }
    }
}