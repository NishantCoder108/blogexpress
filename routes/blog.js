const express =require("express")
const router = express.Router()

const data =require('../data/data.js')


router.get('/', (req,res) => {
    // res.json(data)
    
    res.render('home');
    //Anything want to show without layour just write false , make own design for frontpage
    // res.render('home', {layout: false});
})

router.get('/blogs', (req ,res) => {
  
   res.render('blogPost',{
       data:data
   })
   
} )

router.get('/blogpost/:srum', (req ,res) =>{
    
  myblog=  data.filter(e =>{
        return e.srum ==req.params.srum
    })

    res.render('blogPage',{
        title: myblog[0].title,
        content: myblog[0].desc
    })
})
module.exports= router