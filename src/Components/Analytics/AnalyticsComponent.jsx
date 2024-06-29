import React from 'react';
import Style from "../Analytics/AnalyticsComponent.module.css";

export default function AnalyticsComponent() {

    return (
        <div className={Style.Container}>
            <div className={Style.Card}>
                <div className={Style.CardItem}>
                    <div className={Style.Tasks}>
                        <div className={Style.Circel}></div>
                        <div>Backlog Tasks</div>
                    </div>
                    <div>10</div>
                </div>
                <div className={Style.CardItem}>
                <div className={Style.Tasks}>
                        <div className={Style.Circel}></div>
                    <div>To do Tasks</div>
                    </div>
                    <div>20</div>
                </div>
                <div className={Style.CardItem}>
                <div className={Style.Tasks}>
                        <div className={Style.Circel}></div>
                    <div>In Progress Tasks</div>
                    </div>
                    <div>30</div>
                </div>
                <div className={Style.CardItem}>
                <div className={Style.Tasks}>
                        <div className={Style.Circel}></div>
                    <div>Completed Tasks</div>
                    </div>
                    <div>40</div>
                </div>
            </div>
            <div className={Style.Card}>
                <div className={Style.CardItem}>
                <div className={Style.Tasks}>
                        <div className={Style.Circel}></div>
                    <div>Low Priority</div>
                    </div>
                    <div>40</div>
                </div>
                <div className={Style.CardItem}>
                <div className={Style.Tasks}>
                        <div className={Style.Circel}></div>
                    <div>Moderate Priority</div>
                    </div>
                    <div>30</div>
                </div>
                <div className={Style.CardItem}>
                <div className={Style.Tasks}>
                        <div className={Style.Circel}></div>
                    <div>High Priority</div>
                    </div>
                    <div>20</div>
                </div>
                <div className={Style.CardItem}>
                <div className={Style.Tasks}>
                        <div className={Style.Circel}></div>
                    <div>Due Date Tasks</div>
                    </div>
                    <div>10</div>
                </div>
            </div>
        </div>
    )
}