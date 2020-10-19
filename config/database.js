const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost/db_finance', {useNewUrlParser: true, useUnifiedTopology: true })

mongoose.Error.messages.general.require = "O atributo '{PATH}'é obrigatório"
mongoose.Error.messages.Number.mim = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'"
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'"
