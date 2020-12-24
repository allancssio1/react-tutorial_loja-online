import React from "react";
import "./Card.css";

const PromotionCard = ({promotion}) => {
  return (
    <div className="promotion-card">
      <img src={promotion.imageUrl} alt={promotion.title} className="promotion-card_image"/>
      <div className="promotion-card_info">
        <h1 className="promotion-card_title">{promotion.title}</h1>
        <span className="promotion-card_price">{promotion.price}</span>
        <footer className="promotion-card_footer">
          {promotion.comments.length > 0 && (
            <div className="promotion-card_first-comment">{promotion.comments[0].comment}</div>
          )}
          <div className="promotion-card_comments-count">
            {promotion.comments.length} {promotion.comments.length > 1 ? 'Comentários' : 'Comentário'}
          </div>
          <a href={promotion.url} rel="noopener noreferrer" className="promotion-card_link">IR PARA O SITE</a>
        </footer>
      </div>
    </div>
  )
}

export default PromotionCard