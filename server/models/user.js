const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');
const SALT_WORK_FACTOR = 10;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  save_date: { type: Date, default: Date.now  },
  edit_date: Date
});

userSchema.pre('save', function(next) {
   if(!this.isModified('password')) {
    return next();
   } else {
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if(err) return next(err);

    bcrypt.hash(this.password, salt, null, (err, hash) => {
      if(err) return next(err);

        this.password = hash;
        next();
      });
    });
  }
});

module.exports = mongoose.model('user', userSchema);

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