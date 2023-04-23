const getAllNews = require('./../../db/models/latest')


module.exports = {
    getPage : async (req,res) => {
        try{
            const allNews = await getAllNews.find({})
            res.status(200).json(allNews)
        }catch(err){
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
    }
},
getContent: async (req, res) => {
    try {
      const content = await getAllNews.findById(req.params.id);
      if (!content) {
        return res.status(404).json({ error: `_id:${req.params.id} is not found` });
      }
      res.json(content);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  
}
