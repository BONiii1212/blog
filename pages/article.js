import react from "react";
import Header from "../component/Header";
import { Row,Col } from "antd";
import Author from "../component/Author";
import Classification from "../component/Classification";
import ArticleList from "../component/ArticleList";
import { Pagination } from "antd";

export default function Article(){

    return(
        <div className="article">
            <Header/>
            <div className="contain">
                <Row>
                    <Col span={24} className="contain-title">
                        <span>文章｜Article</span>
                    </Col>
                    <Col span={19}>
                        <div className="article-left">
                            <ArticleList/>
                            <div className="article-pagination">
                            <Pagination size="small" total={50} />
                            </div>
                            
                        </div>
                    </Col>
                    <Col span={5}>
                        <div className="article-right">
                            <Author/>
                            <Classification/>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}