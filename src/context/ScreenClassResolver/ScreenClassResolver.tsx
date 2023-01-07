import { ScreenClassNode } from '../../CoreTypes';
import ScreenClassProvider, {
  ScreenClassContext,
} from '../ScreenClassProvider/ScreenClassProvider';

interface Props {
  children: ScreenClassNode;
}

const ScreenClassResolver = ({ ...props }: Props) => (
  <ScreenClassContext.Consumer>
    {(screenClassCheck) => {
      if (screenClassCheck === undefined) {
        // Resolver is called outside of a context, so create a new provider to wrap inside of.
        return (
          <ScreenClassProvider>
            <ScreenClassContext.Consumer>
              {(screenClassResolved) => {
                if (screenClassResolved !== undefined) {
                  return props.children(screenClassResolved);
                }
                console.error('invalid screenClass');
                return <></>;
              }}
            </ScreenClassContext.Consumer>
          </ScreenClassProvider>
        );
      }
      return props.children(screenClassCheck);
    }}
  </ScreenClassContext.Consumer>
);

export default ScreenClassResolver;
