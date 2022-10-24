import { Circle } from '../../Atoms/Circle/Circle'
import * as S from './Bug.styles'

interface BugProps {
	title: string,
	status: 'Solved' | 'High' | 'Low' | 'Medium',
	author: string
}

export const Bug = ({ title, status, author } : BugProps ) => {
	return (
		<S.Wrapper>
			<S.Anchor to={'/dashboard'}>
				<S.Title>{title}</S.Title>
				<S.StatusWrapper>
					<S.Status>{status}</S.Status>
					<Circle type={status}/>
				</S.StatusWrapper>
				<S.Author>{author}</S.Author>
			</S.Anchor>
		</S.Wrapper>
	)
}
