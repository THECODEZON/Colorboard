import styles from './index.module.css';
import { COLORS } from '@/constant';
const ToolBox=()=>{
    const updateBrushSize=(e)=>{
        brushSize=e.target.value;
        console.log(brushSize);

    }
    


    return (
        <div className={styles.toolboxContainer}>
            <div className={styles.toolItem}>
                <h4 className={styles.toolText}>Stroke color</h4>
                <div className={styles.itemContainer}>
                    <div className={styles.colorBox} style={{backgroundColor:COLORS.BLACK}} />
                    <div className={styles.colorBox} style={{backgroundColor:COLORS.RED}} />
                    <div className={styles.colorBox} style={{backgroundColor:COLORS.GREEN}} />
                    <div className={styles.colorBox} style={{backgroundColor:COLORS.BLUE}} />
                    <div className={styles.colorBox} style={{backgroundColor:COLORS.ORANGE}} />
                    <div className={styles.colorBox} style={{backgroundColor:COLORS. YELLOW}} />

                    
                </div>
            </div>
            <div className={styles.toolItem}>
                <h4 className={styles.toolText}>Brush size</h4>
                <div className={styles.itemContainer}>
                   <input type="range" min={1} max={10} step={1} onChange={updateBrushSize}/>
                </div>
            </div>

        </div>
    )


}

export default ToolBox;