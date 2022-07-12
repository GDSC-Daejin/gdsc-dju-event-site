import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  padding-top: 70px;
  padding-bottom: 200px;
  position: relative;
`;
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
