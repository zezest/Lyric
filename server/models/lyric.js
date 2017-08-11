const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lyricsSubSchema = new Schema({
  type: String,
  text: String
});

const lyricSchema = new Schema({
  title: String,
  lyrics: [lyricsSubSchema],
  patterns: Array,
  published_date: { type: Date, default: Date.now },
  edit_date: Date,
});


lyricSchema.methods.setContext = function(ids) {
  console.log(this.ids);
  return 'a';

  // ids.forEach( id => {
  //   Lyric.findById({ _id: id }, { title: 1, patterns: 1, lyrics: 1 }, (err, lyric) => {
  //     if (err) return res.status(500).json({ error: "database failure", status: 500 });
  //     if(lyric.patterns.length === 0){ return false; }
      
  //     const lyrics = lyric.lyrics;

  //     const title = [];

  //     _.each(lyric.patterns, pattern => {
  //       const lyric = _.find(lyrics, lyric => {
  //         return lyric._id == pattern;
  //       });
  //       title.push(lyric.type);
  //     });
  //     const titles = title.join('-') + '\n\n\n';

  //     const text = [];

  //     _.each(lyric.patterns, pattern => {
  //       const lyric = _.find(lyrics, lyric => {
  //         return lyric._id == pattern;
  //       });
  //       const array = [];
  //       array.push(`<${lyric.type}>\n`);
  //       array.push(`${lyric.text}\n`);
  //       array.push('\n');
  //       text.push(array.join(''));
  //     });

  //     const context = [];
  //     context.push(titles);
  //     context.push(text.join(''));

  //     return this.model(lyricSchema), context.join('');
  //   });
  // });
};



module.exports = mongoose.model('lyric', lyricSchema);

/**
 * model은 데이터베이스에서 데이터를 읽고, 생성하고, 수정하는프로그래밍 인터페이스를 정의합니다.
 * 
 * 
 * schema에서 사용되는 SchemaType은 총 8종류가 있습니다.
 * 
 * 1. String
 * 2. Number
 * 3. Date
 * 4. Buffer
 * 5. Boolean
 * 6. Mixed
 * 7. Objectid
 * 8. Array
 */