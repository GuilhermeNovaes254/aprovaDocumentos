const fileService = require('../services/file.service');

exports.createFileRegistry = async (req, res) => {

    if (req.file != undefined) {

        let date = new Date;
        let id = req.session.usuario._id;
        const fileData = {
            file: req.file.filename,
            protocolo_entrada: `${date.getTime()}-${id}`,
            data_protocolo_entrada: date,
            criador: id,
            local: req.file.path
        }

        await fileService.createFile(fileData);

        res.redirect('/main/anexar?criado=true');

    }

};

exports.openProtocol = async (req, res) => {

    const openProtocol = await fileService.filterOpenProtocolFiles();
    return openProtocol;

};

exports.aprove = async (req, res) => {

    let date = new Date;
    let id = req.query.id;
    let newData = {
        aprovador: id,
        status: 1,
        protocolo_aprov: `${date.getTime()}-${id}`,
        data_procolo_aprov: date
    };

    const aproved = await fileService.updateFile(id, newData);
    res.redirect('/main/aprovar');
}

exports.deny = async (req, res) => {

    let date = new Date;
    let id = req.query.id;
    let newData = {
        aprovador: id,
        status: 2,
        protocolo_aprov: `${date.getTime()}-${id}`,
        data_procolo_aprov: date
    };

    const denied = await fileService.updateFile(id, newData);
    res.redirect('/main/aprovar');
}

