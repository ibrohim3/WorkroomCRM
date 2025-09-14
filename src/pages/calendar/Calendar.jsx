import React from "react";
import "./calendar.css";

function Calendar() {
  return (
    <div className="calendar-container">
      <div className="main">
        <div className="header">
          <h2>Calendar</h2>
          <button className="add-event">
            <span>+ </span>
            Add Event
          </button>
        </div>

        <div className="calendar">
          <div className="month-nav">
            <span>←</span>
            <h3>September, 2025</h3>
            <span>→</span>
          </div>

          <div className="weekdays">
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
            <div>Sun</div>
          </div>

          <div className="days">
            <div className="empty"></div>
            <div className="empty"></div>
            <div>
              <p>1</p>
            </div>
            <div>
              <p>2</p>
            </div>
            <div>
              <p>3</p>
            </div>
            <div>
              <p>4</p>
            </div>
            <div>
              <p>5</p>
            </div>
            <div>
              <p>6</p>
            </div>
            <div>
              <p>7</p>
            </div>
            <div>
              <p>8</p>
              <div className="event purple">Anna's Birthday (3h)</div>
            </div>
            <div>
              <p>9</p>
            </div>
            <div>
              <p>10</p>
            </div>
            <div>
              <p>11</p>
            </div>
            <div>
              <p>12</p>
            </div>
            <div>
              <p>13</p>
            </div>
            <div>
              <p>14</p>
            </div>
            <div>
              <p>15</p>
            </div>
            <div>
              <p>16</p>
              <div className="event blue">Presentation (2h)</div>
            </div>
            <div>
              <p>17</p>
            </div>
            <div>
              <p>18</p>
            </div>
            <div>
              <p>19</p>
            </div>
            <div>
              <p>20</p>
            </div>
            <div>
              <p>21</p>
            </div>
            <div>
              <p>22</p>
            </div>
            <div>
              <p>23</p>
            </div>
            <div>
              <p>24</p>
            </div>
            <div>
              <p>25</p>
            </div>
            <div>
              <p>26</p>
            </div>
            <div>
              <p>27</p>
            </div>
            <div>
              <p>28</p>
              <div className="event purple">Ray's Birthday (3h)</div>
            </div>
            <div>
              <p>29</p>
            </div>
            <div>
              <p>30</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;

// har bir kunni context menu orqali event  qilinganida shu yerga user malumotlarini t`oldirish mumkin bolgan oyna ochilsin
