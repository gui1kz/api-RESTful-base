const db = require('../db');

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM carros', (error, results) => {
                if (error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    buscarUm: (id) => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM carros WHERE id = ?', [id], (error, results) => {
                if (error) { rejeitado(error); return; }
                if (results.length > 0) {
                    aceito(results[0]);
                } else {
                    aceito(false);
                }
            });
        });
    },

    inserir: (modelo, placa) => {
        return new Promise((aceito, rejeitado) => {
            db.query('INSERT INTO carros (modelo, placa) VALUES (?, ?)',
                [modelo, placa], 
                (error, results) => {
                    if (error) { rejeitado(error); return; }
                    aceito(results.insertId);
                    
                }
                
            );
        });
    },

    alterar: (id, modelo, placa) => {
        return new Promise((aceito, rejeitado) => {
            db.query('UPDATE carros SET modelo = ?, placa = ? WHERE id = ?',
                [modelo, placa, id], 
                (error, results) => {
                    console.log(placa, modelo);
                    console.log(error);
                    if (error) { rejeitado(error); return; }
                    aceito(results);
                    
                }
                
            );
        });
    },

    excluir: (id) => {
        return new Promise((aceito, rejeitado) => {
            db.query('DELETE FROM carros WHERE id =?', [id], (error, results) => {
                if (error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    }
};