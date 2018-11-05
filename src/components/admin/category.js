import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchCategories } from '../../redux/category'
class AdminCategory extends PureComponent {
  componentDidMount() {
    this.props.fetchCategories()
  }
  render() {
    return <div>bidule</div>
  }
}
const mapStateToProps = (state) => {
  return {
    categories: state.category.entities
  }
}
export const AdminCategoryConnected = connect(mapStateToProps, {
  fetchCategories
})(AdminCategory)