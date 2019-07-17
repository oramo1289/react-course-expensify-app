import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import { setTextFilter, setStartDate, setEndDate, sortByAmount,sortByDate } from '../actions/filters';


class ExpenseListFilters extends React.Component {
   constructor(props){
        super(props);

        this.state= {
            calendarFocused: null
        }

        this.onDatesChange = this.onDatesChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
   }
   onDatesChange ({ startDate, endDate }) {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  onFocusChange(calendarFocused) {
    this.setState(() => ({ calendarFocused }));
  }
    render() {
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={
                    (e) => {
                        this.props.dispatch(setTextFilter(e.target.value))
                        console.log(e.target.value);
                    }
                }/>
                <select
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        if (e.target.value === 'date'){
                            this.props.dispatch(sortByDate())
                        } else if (e.target.value === 'amount') {
                            this.props.dispatch(sortByAmount())
                        }
                    }}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    startDateId={'startDateID'}
                    endDate={this.props.filters.endDate}
                    endDateId={'endDateID'}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};


export default connect(mapStateToProps)(ExpenseListFilters);