/*
 * 文章列表
 * 主要用于展示页面，所以使用 stateLess 的组件形式
 */
import React from 'react';
import { ListWrapper, ListItem , ArticleInfo, ArticleInfoLeft, ArticleInfoRight} from './style';
import { ApiArticleDetail, ApiArticleComment } from '../../../../config/api';

const ListCon = (props) => {
	const con = props.data.map((item) => {
		return (
			<ListItem className="articleItem" key={item._id}>
				<a className="title" href={ ApiArticleDetail }>{item.title}</a>
				<p className="articleDesc">{item.desc}</p>
				<ArticleInfo className="articleInfo">
					<ArticleInfoLeft>
						<span>
							<i className="iconRead"></i>
							{ item.read }
						</span>
						<span>
							<i className="iconLike"></i>
							{ item.like }
						</span>
						<a href={ ApiArticleComment }>
							<span>
								<i className="iconComment"></i>
								{ item.comments }
							</span>
						</a>
					</ArticleInfoLeft>
					<ArticleInfoRight>
						<span>
							<i className="iconUpdate"></i>
							{ item.updateTime }
						</span>
					</ArticleInfoRight>
				</ArticleInfo>
			</ListItem>
		);
	});
	return con;
}

const List = (props) => {
	return (
		<ListWrapper>
			<ListCon
				data={props.data || []}
			></ListCon>
		</ListWrapper>
	);
}

export default List;