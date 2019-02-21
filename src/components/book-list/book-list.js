import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { compose } from '../../utils';
import { withBookstoreService } from "../hoc";
import { booksLoaded, booksRequested, booksError } from "../../actions";

import BookListItem from '../book-list-item';
import ErrorIndicator from '../error-indicator';

class BookList extends Component {
	componentDidMount () {
		const {
			bookstoreService,
			booksLoaded,
			booksRequested,
			booksError
		} = this.props;

		booksRequested();
		bookstoreService.getBooks()
			.then(books => {
				booksLoaded(books);
			})
			.catch(err => {
				booksError(err);
			});

	}

	render () {
		const { books, loading, error } = this.props;

		if (loading) {
			return (
				<div>Loading...</div>
			);
		}

		if (error) {
			return (
				<ErrorIndicator />
			);
		}

		return (
			<ul>
				{
					books.map(book => {
						return (
							<li>
								<BookListItem book={book}/>
							</li>
						);
					})
				}
			</ul>
		);
	}
}

BookList.propTypes = {};

const mapStateToProps = state => {
	return {
		books: state.books,
		loading: state.loading,
		error: state.error
	};
};

const mapDispatchToProps = {
	booksLoaded,
	booksRequested,
	booksError
};

export default compose(
	withBookstoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(BookList);

