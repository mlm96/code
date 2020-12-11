/**
 * 
 * @authors cherish yii2 (cherish@cherish.pw)
 * @date    2020-12-10 16:48:28
 * @version v1.0
 * @description the core js of todolist project
 * 
 * ━━━━━━神兽出没━━━━━━
 * 　　   ┏┓　 ┏┓
 * 　┏━━━━┛┻━━━┛┻━━━┓
 * 　┃              ┃
 * 　┃       ━　    ┃
 * 　┃　  ┳┛ 　┗┳   ┃
 * 　┃              ┃
 * 　┃       ┻　    ┃
 * 　┃              ┃
 * 　┗━━━┓      ┏━━━┛ Code is far away from bugs with the animal protecting.
 *       ┃      ┃     神兽保佑,代码无bug。
 *       ┃      ┃
 *       ┃      ┗━━━┓
 *       ┃      　　┣┓
 *       ┃      　　┏┛
 *       ┗━┓┓┏━━┳┓┏━┛
 *     　  ┃┫┫　┃┫┫
 *     　  ┗┻┛　┗┻┛
 *
 * ━━━━━━感觉萌萌哒━━━━━━
 */

// 请根据考试说明文档中列出的需求进行作答
// 预祝各位顺利通过本次考试，see you next week！
// ...


//添加待办事项
    $('.add').click(function(){
        const value = $('#title').val().trim()
        if (!value) return
        // console.log(value)
        add(value)
        $('#title').val('')
    })
    function add(item){
        const li1=$(`
        <li>
        <input type="checkbox" />
        <p onclick="edit(1)">${ item }</p>
        <a href="javascript:remove(1)">-</a>
    </li>
        `)
        $('#todolist').append(li1)
        reload()
        _reload()
    }
//切换位置
$('#todolist').on('click','input',function(){
    if($(this).prop('checked')){
        $('#donelist').append($(this).parent())
        reload()
        _reload()

    }
})
$('#donelist').on('click','input',function(){
    if(!$(this).prop('checked')){
        $('#todolist').append($(this).parent())
        reload()
        _reload()

    }
    
})
//改变数字
function reload(){
    const li =document.querySelectorAll('#todolist li')
    console.log(li.length)
    str = `
    ${ li.length }
    `
    $('#todocount').html(str)
}
function _reload(){
    const li =document.querySelectorAll('#donelist li')
    console.log(li.length)
    str = `
    ${ li.length }
    `
    $('#donecount').html(str)
}
//删除代办
$('#todolist').on('click','a',function(){
    $(this).parent().remove()
    reload()
    _reload()
})
$('#donelist').on('click','a',function(){
    $(this).parent().remove()
    reload()
    _reload()
})
//实现跨域
/* const inp = document.querySelector('input')
    inp.addEventListener('input', function () {
        const value = this.value.trim()
      if (!value) return
      const script = document.createElement('script')
      const url = ` https://api.i-lynn.cn/getIpInfo`
      script.src = url
      document.body.appendChild(script)
      script.remove()
    })
    function bindHtml(res) {
        console.log(res.g)
    } */