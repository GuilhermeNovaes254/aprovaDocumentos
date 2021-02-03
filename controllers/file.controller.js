const crypto = require('crypto');

const fileService = require('../services/file.service'); 

exports.createFileRegistry = async (req, res) => {

   if(req.file.size >= 1 ){

      const date = new Date;
      let id = req.session.usuario._id;

      const fileData = {
         file : req.file.filename,
         protocolo_entrada: `${date.getTime()}-${id}`,
         data_protocolo_entrada: date,
         criador : id
      }

      await fileService.createFile(fileData);
      res.status(201).send('Created');



   }
   

};

