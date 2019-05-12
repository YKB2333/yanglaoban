const Router = require('koa-router');

const db = require('../db');

// 创建路由
var router = new Router();


router.get('/:cate',async (ctx,next)=>{
    let {cate}=ctx.params;
    // console.log(cate)
    switch(cate){
        case "find":
                let res2 = await db.find('YLBorderForm',{});
                ctx.body = res2;
                break;
        case "add" :
            // console.log(ctx.query)
            let {data} = ctx.query;
            
            // page=page*5
            let res4 = await db.insert('YLBorderForm',JSON.parse(data));
            ctx.body = ["还没完成"];
            break;
    }
    
    
})

router.post("/",async (ctx,next)=>{
    let {type,cataId}=ctx.request.body;
    // console.log(ctx.request.body)
    cataId = cataId*1;
    let res2 = await db.find('YLBorderForm',{"goodslist.cataId":cataId});
    let arr = res2[0].goodslist.filter(item=>{
       return item.cataId!=cataId
    })
    let res3 = await db.update('YLBorderForm',{type},{$set:{"goodslist":arr}});

    ctx.body={
        code:1,
        msg:"成功",
        data : res3
    }
})

module.exports = router;