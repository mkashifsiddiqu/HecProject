import ConnectDb from '../../middleware/connection';
import Product from '../../Models/Product';
const handler =async (req,res) => {
  const product = await Product.find();
  res.status(200).json({ product });
}
export default ConnectDb(handler);
