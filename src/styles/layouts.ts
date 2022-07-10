import { motion } from 'framer-motion';
import styled from 'styled-components';

//보통 웹사이트에서 사용하는 Container 사이즈입니다.

export const LayoutContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  min-width: 320px;
  flex: 1;
`;
export const ContainerInner = styled(motion.div)`
  width: 92%;
  height: 100%;
  max-width: calc(100% - 48px);
  margin: 0 auto;
  padding: 0 20px;
`;
export const NavigationBlock = styled.div`
  height: 70px;
`;
