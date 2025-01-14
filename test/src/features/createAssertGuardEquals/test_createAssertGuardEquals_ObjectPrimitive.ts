import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_createAssertGuardEquals_ObjectPrimitive =
  _test_assertGuardEquals("ObjectPrimitive")<ObjectPrimitive>(ObjectPrimitive)(
    typia.createAssertGuardEquals<ObjectPrimitive>(),
  );
