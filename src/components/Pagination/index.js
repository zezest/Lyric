import React, { Component } from 'react';
import _ from 'lodash';

import {
  PaginationWrap, 
  PageBtn,
  PageUl
} from './styled';

export default class Pagination extends Component {
  movePage = e => {
    const { name } = e.target;
    const { page, has_more, getPage } = this.props;
    
    if (name === 'next' && !has_more) return;
    if (name === 'prev' && Number(page) === 1) return;

    const next_page = name === 'prev' ? page - 1 : page + 1;
    getPage(next_page);
  }

  onClickPage = (page, e) => {
    const { getPage } = this.props;
    if (page === this.props.page) return;
    getPage(page);
  }

  render() {
    const { page, total_page } = this.props;
    const startPage = Math.ceil(page / 10);
    const endPage = total_page > (startPage + 10) ? startPage + 10 : total_page + 1;
    
    return (
      <PaginationWrap>
        <div>
          <PageBtn name="prev" onClick={this.movePage}>PREV</PageBtn>
          <PageUl>
            {_.range(startPage, endPage).map(p => 
              <li key={p} onClick={this.onClickPage.bind(null, p)}>
                <p className={p === page ? 'active' : ''}>{p}</p>
              </li>
            )}
          </PageUl>
          <PageBtn name="next" onClick={this.movePage}>NEXT</PageBtn>
        </div>
      </PaginationWrap>
    )
  }
}