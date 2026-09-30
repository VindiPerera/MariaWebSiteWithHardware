import React from "react";
import styles from "./HardwareDeviceVisual.module.css";

type Props = {
  code: string;
  category: string;
  name: string;
};

export function HardwareDeviceVisual({ code, category }: Props) {
  // Specialized visual render per hardware category/type
  if (category === "touch-pos") {
    const isDual = code === "PRI2914";
    return (
      <div className={styles.visualContainer}>
        <div className={styles.terminalBase}>
          <div className={styles.terminalPole} />
          {/* Main 15.6 Screen */}
          <div className={styles.posScreen}>
            <div className={styles.screenBezel}>
              <div className={styles.screenInner}>
                <div className={styles.screenTopBar}>
                  <div className={styles.dotRed} />
                  <span className={styles.screenBrand}>MariaPoS v4.2</span>
                  <span className={styles.screenTime}>14:28</span>
                </div>
                <div className={styles.screenContent}>
                  <div className={styles.cartMock}>
                    <div className={styles.cartRow} />
                    <div className={styles.cartRow} />
                    <div className={styles.cartRow} />
                  </div>
                  <div className={styles.numpadMock}>
                    <div className={styles.totalBadge}>LKR 4,850.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.screenStand} />
          </div>
          {/* Secondary Customer Screen if dual */}
          {isDual && (
            <div className={styles.customerScreen}>
              <div className={styles.customerBezel}>
                <div className={styles.customerContent}>
                  <span>Total Due</span>
                  <strong>Rs. 4,850</strong>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (category === "printers") {
    const isPortable = code === "TON2287" || code === "PRI2352";
    const isLabel = code.includes("246B") || code.includes("T361U") || code.includes("365B") || code.includes("T451B");

    if (isPortable) {
      return (
        <div className={styles.visualContainer}>
          <div className={styles.mobilePrinterBody}>
            <div className={styles.mobileOled}>
              <div className={styles.oledDot} />
              <span>BT 80mm READY</span>
            </div>
            <div className={styles.paperMouth}>
              <div className={styles.mobileReceipt}>
                <div className={styles.receiptLineSmall} />
                <div className={styles.receiptLineSmall} />
              </div>
            </div>
            <div className={styles.powerBtn} />
          </div>
        </div>
      );
    }

    return (
      <div className={styles.visualContainer}>
        <div className={styles.cubePrinterBody}>
          <div className={styles.printerTop}>
            <div className={styles.paperSlot}>
              <div className={styles.paperEject}>
                <div className={styles.receiptLine} />
                <div className={styles.receiptLine} />
                <div className={styles.receiptBarcode} />
              </div>
            </div>
          </div>
          <div className={styles.printerFront}>
            <div className={styles.printerBrand}>
              <span className={styles.brandName}>Xprinter</span>
              <div className={styles.ledCluster}>
                <div className={`${styles.led} ${styles.ledGreen}`} />
                <div className={`${styles.led} ${styles.ledBlue}`} />
              </div>
            </div>
            <div className={styles.openLever}>
              <span>{isLabel ? "LABEL/BARCODE" : "ESC/POS AUTO-CUT"}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (category === "scanners") {
    const isDesktop = code === "AQ6180";
    if (isDesktop) {
      return (
        <div className={styles.visualContainer}>
          <div className={styles.omniScanner}>
            <div className={styles.omniDome}>
              <div className={styles.omniGlass}>
                <div className={styles.omniGrid} />
                <div className={styles.omniLaser} />
              </div>
            </div>
            <div className={styles.omniBase}>
              <span>OMNIDIRECTIONAL 2D</span>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className={styles.visualContainer}>
        <div className={styles.handheldScanner}>
          <div className={styles.scannerHead}>
            <div className={styles.laserAperture}>
              <div className={styles.laserBeam} />
            </div>
          </div>
          <div className={styles.scannerGrip}>
            <div className={styles.triggerButton} />
          </div>
          <div className={styles.scannerStandArc} />
        </div>
      </div>
    );
  }

  if (category === "cash-drawers") {
    return (
      <div className={styles.visualContainer}>
        <div className={styles.cashDrawerChassis}>
          <div className={styles.cashDrawerFront}>
            <div className={styles.drawerKeyhole} />
            <div className={styles.mediaSlots}>
              <div className={styles.mediaSlot} />
              <div className={styles.mediaSlot} />
            </div>
          </div>
          <div className={styles.trayPeek}>
            <div className={styles.billClip} />
            <div className={styles.billClip} />
            <div className={styles.billClip} />
          </div>
        </div>
      </div>
    );
  }

  if (category === "bill-counters") {
    const isP80 = code === "CAS2449";
    return (
      <div className={styles.visualContainer}>
        <div className={styles.billCounterChassis}>
          <div className={styles.counterHopper}>
            <div className={styles.noteStack}>
              <div className={styles.note} />
              <div className={styles.note} />
              <div className={styles.note} />
            </div>
          </div>
          <div className={styles.counterPanel}>
            <div className={isP80 ? styles.counterLcdP80 : styles.counterLcd}>
              <span>100 PCS</span>
              <strong>UV · MG PASS</strong>
            </div>
            <div className={styles.counterButtons}>
              <div className={styles.smallBtn} />
              <div className={styles.smallBtn} />
              <div className={styles.smallBtn} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Consumables / Rolls
  return (
    <div className={styles.visualContainer}>
      <div className={styles.rollChassis}>
        <div className={styles.rollTop}>
          <div className={styles.rollCore} />
        </div>
        <div className={styles.rollBody}>
          <div className={styles.rollUnfurl}>
            <span>{code.includes("30") ? "40×30 BARCODE" : "80×80 THERMAL"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
