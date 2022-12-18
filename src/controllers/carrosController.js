import carros from "../models/Carro.js";


class CarrosController {
    // código para buscar carros
    static buscarCarros = (req, res) => {
        carros.find((err, carros) => {
            res.status(200).json(carros);
        });
    }

    // código para busca de carros por id
    static buscarCarrosPorId = (req, res) => {
        const id = req.params.id;

        carros.findById(id, (err, carros) => {
            if(err) {
                res.status(400).send({message: `${err.message} - Id não existe`});
            } else {
                res.status(200).send(carros);
            }
        });
    }

    // código para cadastrar carros
    static cadastroDeCarros = (req, res) => {
        let carro = new carros(req.body);
        carro.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message}, Não foi possível cadastrar o carro!`});
            } else {
                res.status(201).send(carro.toJSON());
            }
        });
    }

    // código para atualizar carros por id
    static atualizarCarros = (req, res) => {
        const id = req.params.id;

        carros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: "Modelo atualizado com sucesso"});
            } else {
                res.status(500).send({message: err.message});
            }
        });
    }

    // código para deletar carros por id
    static deletarCarros = (req, res) => {
        const id = req.params.id;    
        
        carros.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: "Carro excluído com sucesso"});
            } else {
                res.status(500).send({message: err.message});
            }
        });
    
    }
}

export default CarrosController;