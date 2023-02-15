import typia from "typia";

import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_assertPrune_ObjectGenericAlias = _test_assertPrune(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input) => typia.assertPrune(input),
    ObjectGenericAlias.SPOILERS,
);
