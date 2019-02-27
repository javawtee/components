import React from 'react'

// import './PagerStyling.css', or your styles

export default class Pager extends React.Component {
    state = {
        start: 1,
        count: 3, // adjustable, count represents for the number of items to be displayed
        currentPage: 0,
        prevCurrentPage: 0, // in case user gives wrong input, restore currentPage with this value
        totalPages: 0,
        items: [],
    }

    componentDidMount(){
        this.setState({totalPages: this.state.items.length / this.state.count}, () => {
            if(this.state.totalPages > 0)
                this.setState({currentPage: 1})
        })

        //fetch your data here and setState({items:...})
    }

    componentDidUpdate(){
        if(this.state.currentPage <= 0)
            this.setState({currentPage: 1, prevCurrentPage: 1}) // rollback to initial state if something went wrong
    }

    goToPreviousPage = () => {
        var newStart = this.state.start - this.state.count
        if(newStart > 0)
            this.setState({start: newStart, currentPage: this.state.currentPage -1})
    }

    goToNextPage = () => {
        var newStart = this.state.start + this.state.count
        if(newStart < this.state.items.length)
            this.setState({start: newStart, currentPage: this.state.currentPage +1})
    }

    onChange = (e) => {
        if(isNaN(e.target.value))
            return
        if(this.state.currentPage > 0 && this.state.currentPage < this.state.totalPages && (e.target.value > this.state.totalPages || e.target.value < 0))
            this.setState({prevCurrentPage: this.state.currentPage})
        this.setState({[e.target.id]: e.target.value})
        e.target.select()
    }

    onFocus = (e) => {
        e.target.select()
    }

    onKeyPress = (e) => {
        if(e.key === 'Enter'){
            if(!isNaN(e.target.value) && e.target.value <= this.state.totalPages && e.target.value > 0)
                this.setState({prevCurrentPage: e.target.value, currentPage: e.target.value, start: (e.target.value -1) * this.state.count + 1})
            else {
                alert('Page ' + e.target.value + ' doesn\'t exist. Total of pages is ' + this.state.totalPages + 
                        '.\nTurned back to your previous page: ' + this.state.prevCurrentPage )
                this.setState({currentPage: this.state.prevCurrentPage})
            }
        }
    }
  render() {
      var actualStart = this.state.start -1 // get array index[0...n]
    return (
        <div className='Pager'>
            <div className='items'>
                {
                    this.state.items.slice(actualStart, actualStart + this.state.count).map(item => 
                    <ul>
                        <li key={item.id}>{item.src}</li>
                    </ul>
                )}
            </div>
            <div className='pager'>
                <div className='previousItems' onClick={this.goToPreviousPage}>
                    <div style={{borderRightColor: this.state.start - this.state.count > 0 ? '' : '#404042'}}></div>
                </div>
                <div className='pageNavigation'>
                    <input id='currentPage' type='text' value={Number.parseInt(this.state.currentPage)} 
                            onChange={this.onChange} 
                            onFocus={this.onFocus}
                            onKeyPress={this.onKeyPress}
                            autoComplete='off'/> <span>/</span>
                    <input id='totalPages' type='text' placeholder={this.state.totalPages} disabled/>
                </div>
                <div className='nextItems' onClick={this.goToNextPage}>
                    <div style={{borderLeftColor: this.state.start + this.state.count < this.state.items.length ? '' : '#404042'}}></div>
                </div>
            </div>
            
        </div>
    )
  }  
 
}
