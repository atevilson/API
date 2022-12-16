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
}

export default CarrosController;