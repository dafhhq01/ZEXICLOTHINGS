import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const whatsappMessage = `Halo, saya tertarik dengan produk ${product.nama} (ID: ${product.kode})`;
  const whatsappUrl = `https://api.whatsapp.com/send?phone=62087767202572&text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <motion.div
      className={styles.productCard}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className={styles.imageContainer}>
        <img
          src={product.gambar}
          alt={product.nama}
          className={styles.productImage}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/600x800?text=Thrift+PREMIUM';
          }}
        />
      </div>

      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{product.nama}</h3>
        <p className={styles.productDescription}>
          {product.deskripsi}
        </p>
        <div className={styles.productFooter}>
          <p className={styles.productPrice}>Rp {product.harga.toLocaleString('id-ID')}</p>
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.buyButton}
            whileHover={{
              backgroundColor: 'var(--primary-color)',
              color: 'var(--secondary-color)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            Beli via WhatsApp
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;