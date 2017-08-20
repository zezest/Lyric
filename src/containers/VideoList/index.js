import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import _ from 'lodash';
import Vimeo from 'vimeo';

export default class Vedio extends Component {
  componentDidMount() {
    const lib = new Vimeo.Vimeo('a1d111054bda03080c166ba9bd80f8f85904872d', 
                          'fBrmu6WYvjkc5361bg9VfHag9HA/1j7/TNmTbgt3cyvWbfOqCx6QxO5ARGwX80tydjwC/K8W+kUeKP1i+MNc4q0M8t/LGgGi/hSnkTzKWZN1SvOQLhYyhtNdGVmqG+uf', 
                          '67d723c5e3911ab87ab9292d5b4355b3');

    lib.generateClientCredentials(null, ( err, access_token ) => {
      if (err) {
              throw err;
      }

      const token = access_token.access_token;

      // Other useful information is included alongside the access token
      // We include the final scopes granted to the token. This is important because the user (or api) might revoke scopes during the authentication process
      const scopes = access_token.scope;


      
    });
    this.reqTest(lib);
  }

  reqTest = (lib) => {
    lib.request({
      // path:'/users/30439308/videos',
      path:'/users/30439308/videos?query=5부*', 
      query: {
        page: 1,
        per_page: 10
      }
    }, ( err, body, status_code, headers ) => {
      if (err) {
          console.log('error');
          console.log(err);
      } else {
          console.log('body');
          console.log(body);
      }

      console.log('status code');
      console.log(status_code);
      console.log('headers');
      console.log(headers);
    })
  }
  
  render() {
    return (
      <div>
        비디오 리스트
      </div>
    )
  }
}