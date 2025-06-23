import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import axios from 'axios';
import styles from './ProductList.module.css'; 

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://api.sheetbest.com/sheets/56a9ba1b-146c-42f8-8984-c7eaf0605ffa');
        
        const processedProducts = response.data.map(product => {
          // Pastikan properti yang diakses benar
          const nama = product["Nama Produk"] || product.nama || "Produk";
          const harga = product.Harga || product.harga; 
          const gambar = product["Gambar URL"] || product.gambar;
          const kode = product["Kode Produk"] || product.kode || "N/A";
          const deskripsi = product["Deskripsi"] || product.deskripsi || "Deskripsi produk tidak tersedia";
          
          // Bersihkan harga
          let cleanPrice = harga;
          if (typeof cleanPrice === 'string') {
            cleanPrice = cleanPrice.replace(/[^\d]/g, '');
          }
          cleanPrice = Number(cleanPrice) || 0;
          
          return {
            id: product.ID || product.id,
            nama,
            harga: cleanPrice,
            gambar,
            kode,
            deskripsi
          };
        });
        
        setProducts(processedProducts);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching products:', err);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className={styles.productSection}>
      <div className={styles.sectionHeader}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.sectionTitle}
        >
          KATALOG
        </motion.h2>
      </div>
      
      <div className={styles.productGrid}>
        {products.map((product, index) => (
          <motion.div
            key={product.id || index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;