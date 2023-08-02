import Enzyme from "enzyme";
import Adapter from "@feaster/enzyme-adapter-react-18";

Enzyme.configure({ adapter: new Adapter() });