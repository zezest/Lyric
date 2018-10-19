const Vimeo = require('vimeo').Vimeo;

const lib = new Vimeo(
  'a1d111054bda03080c166ba9bd80f8f85904872d', 
  'fBrmu6WYvjkc5361bg9VfHag9HA/1j7/TNmTbgt3cyvWbfOqCx6QxO5ARGwX80tydjwC/K8W+kUeKP1i+MNc4q0M8t/LGgGi/hSnkTzKWZN1SvOQLhYyhtNdGVmqG+uf', 
  '67d723c5e3911ab87ab9292d5b4355b3');

  lib.generateClientCredentials(null, (err, access_token) => {
  if (err) {
    throw err;
  }

  const token = access_token.access_token;

  // Other useful information is included alongside the access token
  // We include the final scopes granted to the token. This is important because the user (or api) might revoke scopes during the authentication process
  const scopes = access_token.scope;
});

exports.getVideo = (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 9
  const search = req.query.keyword;
  const isSearch = !!search ? true : false;
  let keyword = '5부*';
  
  if (isSearch) {
    keyword = req.query.search + ' 5부*';
  }

  lib.request({
    method: 'GET',
    path: '/users/30439308/videos',
    query: {
      page: page,
      per_page: limit,
      query: keyword,
    },
  }, (err, body) => {
    if (err) throw err;

    const total_page = Math.ceil(body.total / limit);
    const items = body.data;
    const l = items.length || 1;
    const array = [];

    for (let i = 0; i < l; i++) {
      const item = items[i];
      const urls = item.uri.split('/');
      const url = urls[urls.length - 1];
      array[i] = {
        thumbnail_img: item.pictures.sizes[2],
        name: item.name,
        save_date: item.created_time,
        video_url: url,
      }
    }

    const data = {
      data: array,
      page: body.page,
      total: body.total,
      limit: limit,
      total_page: total_page,
      has_more: total_page > page,
    };

    res.json(data);
  });
}