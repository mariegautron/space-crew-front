import { ArrowBackIcon, ArrowForwardIcon, Icon } from '@chakra-ui/icons';
import { Button, type ButtonProps, Text } from '@chakra-ui/react';
import {
  type FC,
  type ReactElement,
  type ReactNode,
  type RefObject,
} from 'react';
import { Link } from 'react-router-dom';

interface SpaceButtonProps extends ButtonProps {
  children: ReactNode;
  spaceButtonType?: 'primary' | 'secondary';
  href?: string;
  spaceButtonLeftIcon?: boolean;
  textColor?: string;
  icon?: ReactElement;
  ref?: RefObject<unknown>;
  noIcon?: boolean;
}

const SpaceButton: FC<SpaceButtonProps> = ({
  children,
  spaceButtonType = 'primary',
  href,
  spaceButtonLeftIcon,
  textColor,
  icon,
  colorScheme,
  size,
  ref,
  noIcon = false,
  ...props
}: SpaceButtonProps) => {
  if (spaceButtonType === 'secondary') {
    return (
      <Button
        {...(href && { as: Link, to: href })}
        {...props}
        my={{ sm: '1.5rem', lg: '0px' }}
        display="flex"
        alignItem="center"
        ref={ref}
      >
        {!noIcon && spaceButtonLeftIcon && (
          <Icon
            as={icon != null ? (icon.type as React.ElementType) : ArrowBackIcon}
            w="20px"
            h="20px"
            color={textColor || '#fff'}
            fontSize="2xl"
            transition="all .3s ease"
            mx=".3rem"
            cursor="pointer"
            pt="4px"
            _hover={{ transform: 'translateX(20%)' }}
          />
        )}
        <Text
          fontSize="sm"
          color={textColor || '#fff'}
          fontWeight="bold"
          cursor="pointer"
          transition="all .3s ease"
          _hover={{ me: '4px' }}
        >
          {children}
        </Text>
        {!noIcon && !spaceButtonLeftIcon && (
          <Icon
            as={
              icon != null ? (icon.type as React.ElementType) : ArrowForwardIcon
            }
            w="20px"
            h="20px"
            color={textColor || '#fff'}
            fontSize="2xl"
            transition="all .3s ease"
            mx=".3rem"
            cursor="pointer"
            pt="4px"
            _hover={{ transform: 'translateX(20%)' }}
          />
        )}
      </Button>
    );
  }

  return (
    <Button
      {...props}
      ref={ref}
      variant="solid"
      size={size || 'lg'}
      colorScheme={colorScheme || 'green'}
      {...(!noIcon &&
        spaceButtonLeftIcon && { leftIcon: icon || <ArrowBackIcon /> })}
      {...(!noIcon &&
        !spaceButtonLeftIcon && {
          rightIcon: icon || <ArrowForwardIcon />,
        })}
      color={textColor || 'blackAlpha.800'}
      {...(!colorScheme && {
        backgroundColor: 'green.300',
        bgGradient: 'linear(to right, green.300,cyan.300)',
      })}
      borderRadius={10}
      p={5}
      {...(href && { as: Link, to: href })}
    >
      {children}
    </Button>
  );
};

export default SpaceButton;
