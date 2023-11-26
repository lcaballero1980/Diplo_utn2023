var express = require('express');
var router = express.Router();
var usuariosModel = require('../../models/usuariosModel');
var tareaModel = require('../../models/tareaModel');

router.get('/', async function (req, res, next) {

  var tareas = await tareaModel.getTarea();

  res.render('admin/principal', { //login.hbs
    layout: 'admin/layout',
    persona: req.session.nombre,
    tareas
  })
});

router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout'
  })
});

router.post('/agregar', async (req, res, next) => {
  try {
    if(req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
      await tareaModel.insertTarea(req.body);
      res.redirect('/admin/principal')
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos son requeridos'
      })
    }
  } catch (error) {
    console.log(error)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se cargo las tareas'
    })
  }
})

router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;
  await tareaModel.deleteTareaById(id);
  res.redirect('/admin/principal');
});

router.get('/modificar/:id', async (req, res, next) => {
  var id = req.params.id;
  console.log(req.params.id);
  var tarea = await tareaModel.getTareaById(id);
  
  // console.log(req.params.id);
  res.render('admin/modificar', {
    layout: 'admin/layout',
    tarea
  })
});

router.post('/modificar', async (req, res, next) => {
  try {
    var obj = {
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      cuerpo: req.body.cuerpo
    }
    console.log(obj);
    
    await tareaModel.modificarTareaById(obj, req.body.id);
    res.redirect('/admin/principal');

  } catch (error) {
    console.log(error)
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modifico la tarea'
    })
  }
})


module.exports = router;