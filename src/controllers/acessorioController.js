import acessorio from "../models/Acessorio.js";

class AcessorioController {
    // código para buscar acessorios
    static listarAcessorios = (req, res) => {
        acessorio.find((err, acessorio) => {
            res.status(200).send(acessorio)
        });
    }

    // código para busca de acessorios por id
    static buscarAcessoriosPorId = (req, res) => {
        const id = req.params.id;

        acessorio.findById(id, (err, acessorio) => {
            if(err) {
                res.status(400).send({message: `${err.message} - Id não existe`});
            } else {
                res.status(200).send(acessorio);
            }
        });
    }

    // código para cadastrar acessorios
    static cadastroDeAcessorios = (req, res) => {
        let acessorios = new acessorio(req.body);
        acessorios.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message}, Não foi possível cadastrar o acessorio!`});
            } else {
                res.status(201).send(acessorios.toJSON());
            }
        });
    }

    // código para atualizar acessorios por id
    static atualizarAcessorios = (req, res) => {
        const id = req.params.id;

        acessorio.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: "Acessorio atualizado com sucesso"});
            } else {
                res.status(500).send({message: err.message});
            }
        });
    }

    // código para deletar acessorios por id
    static deletarAcessorios = (req, res) => {
        const id = req.params.id;    
        
        acessorio.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: "Acessorio excluído com sucesso"});
            } else {
                res.status(500).send({message: err.message});
            }
        });

    }
}


export default AcessorioController;