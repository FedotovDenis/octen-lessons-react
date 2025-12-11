import type { IProductsModel } from '../../models/IProductsModel'
import type { FC } from "react";
import './ProductComponent.module.css';

type ProductComponentProps = {
    product: IProductsModel;
}

export const ProductComponent: FC<ProductComponentProps> = ({ product }) => {
    return (
        <div className="product-card">
            <div className="product-header">
                <h1>{product.id}. {product.title}</h1>
                <span className="brand">{product.brand}</span>
            </div>

            <div className="product-images">
                <img src={product.thumbnail} alt={product.title} className="thumbnail"/>
                <div className="additional-images">
                    {product.images.map((image, index) => (
                        <img key={index} src={image} alt={`${product.title} ${index + 1}`} />
                    ))}
                </div>
            </div>

            <div className="product-info">
                <p className="description">{product.description}</p>

                <div className="price-section">
                    <span className="price">${product.price}</span>
                    {product.discountPercentage > 0 && (
                        <span className="discount">-{product.discountPercentage}%</span>
                    )}
                </div>

                <div className="product-stats">
                    <span className="rating">Rating: {product.rating}/5</span>
                    <span className="stock">In Stock: {product.stock}</span>
                    <span className="status">{product.availabilityStatus}</span>
                </div>

                <div className="product-details">
                    <p>Category: {product.category}</p>
                    <p>SKU: {product.sku}</p>
                    <p>Weight: {product.weight}g</p>
                    <div className="dimensions">
                        <p>Dimensions:</p>
                        <ul>
                            <li>Width: {product.dimensions.width}cm</li>
                            <li>Height: {product.dimensions.height}cm</li>
                            <li>Depth: {product.dimensions.depth}cm</li>
                        </ul>
                    </div>
                </div>

                <div className="tags">
                    {product.tags.map((tag, index) => (
                        <span key={index} className="tag">#{tag}</span>
                    ))}
                </div>

                <div className="shipping-info">
                    <p>{product.shippingInformation}</p>
                    <p>Minimum Order: {product.minimumOrderQuantity} units</p>
                    <p>{product.warrantyInformation}</p>
                    <p>{product.returnPolicy}</p>
                </div>

                <div className="reviews">
                    <h3>Reviews</h3>
                    {product.reviews.map((review, index) => (
                        <div key={index} className="review">
                            <div className="review-header">
                                <span className="reviewer">{review.reviewerName}</span>
                                <span className="review-rating">{review.rating}/5</span>
                                <span className="review-date">
                                    {new Date(review.date).toLocaleDateString()}
                                </span>
                            </div>
                            <p className="review-comment">{review.comment}</p>
                        </div>
                    ))}
                </div>

                <div className="meta-info">
                    <small>Created: {new Date(product.meta.createdAt).toLocaleDateString()}</small>
                    <small>Updated: {new Date(product.meta.updatedAt).toLocaleDateString()}</small>
                    <p>Barcode: {product.meta.barcode}</p>
                    <img src={product.meta.qrCode} alt="QR Code" className="qr-code"/>
                </div>
            </div>
        </div>
    );
};