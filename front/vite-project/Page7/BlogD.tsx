import styles from  './BlogD.module.scss';
import {im} from  '../src/assets/img.ts';

function BlogD() {

  return (
    <>
      <main>
        <section className={styles.sect1}>
          <div>
            <button>Back to all Projects</button>
            <div>
              <h1>Benefits of Energy- Efficient Homes</h1>
              <p>In this blog post, we discuss the importance of energy-efficient homes and how they can benefit both the environment and your wallet. We'll explore the latest energy-efficient technologies and provide tips on how to make your home more energy-efficient, from insulation to solar panels.</p>
            </div>
            <div>
              <button>Smart Homes</button>
              <div>
                <img src={im.calendar} alt="" />
                <p>May 10, 2022</p>
              </div>
              <div>
                <img src={im.people8} alt="" />
                <p>By Mira</p>
              </div>
            </div>
            <div></div>
          </div>
        </section>
        <section className={styles.sect2}>

        </section>
        <section className={styles.sect3}>

        </section>
      </main>
    </>
  )
}

export default BlogD
