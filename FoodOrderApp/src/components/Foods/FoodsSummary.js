import classes from './FoodsSummary.module.css';

const FoodsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>用心呈現，帶給你更美好的每一天</h2>
      <p>
        請選擇您想選購的食品，我們會盡速為您送上！
      </p>
      <p>
        所有餐點我們皆現做現炸，請耐心等待！
      </p>
    </section>
  );
};

export default FoodsSummary;