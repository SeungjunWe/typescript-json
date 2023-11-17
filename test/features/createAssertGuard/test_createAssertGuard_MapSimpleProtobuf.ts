import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_createAssertGuard_MapSimpleProtobuf = _test_assertGuard(
    "MapSimpleProtobuf",
)<MapSimpleProtobuf>(MapSimpleProtobuf)(
    typia.createAssertGuard<MapSimpleProtobuf>(),
);