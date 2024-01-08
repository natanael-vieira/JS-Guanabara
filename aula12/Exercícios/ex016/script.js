function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')

    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fSex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fSex[0].checked) {
            genero = 'Homem'
            
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'Imagens/bebeh.png')
            } else if (idade < 25) {
                //jovem
                img.setAttribute('src', 'Imagens/jovemh.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'Imagens/adultoh.png')
            } else {
                //idoso
                img.setAttribute('src', 'Imagens/idosoh.png')
            }
        } else if (fSex[1].checked) {
            genero = 'Mulher'
            
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', `Imagens/bebem.png`)
            } else if (idade < 25) {
                //jovem
                img.setAttribute('src', 'Imagens/jovemm.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'Imagens/adultom.png')
            } else {
                //idoso
                img.setAttribute('src', 'Imagens/idosom.png')
            }
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Identificamos ${genero} com ${idade} ano(s).`
        res.appendChild(img)
    }
}