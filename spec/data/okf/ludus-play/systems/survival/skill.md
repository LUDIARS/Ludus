---
type: "Ludus Gameplay System"
title: "スキル/熟練度システム"
description: "繰り返し行動による成長を提供し、長期的な進行感を作る。"
tags:
  - "ludus"
  - "gameplay-system"
  - "survival"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:survival:skill"
genre_id: "genre:survival"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

繰り返し行動による成長を提供し、長期的な進行感を作る。

# 設計思想

『プレイスタイルの個性化』。すべて最大化できると個性がなく、厳しすぎると選択ミスが致命的。主要スキルは最大化可能だがマイナースキルは取捨選択が必要なバランスが理想。

# 主要機能

- スキルカテゴリ (採取/クラフト/戦闘/サバイバル)
- 経験値獲得 (該当行動で熟練度上昇)
- レベルアップ効果 (効率向上/新レシピ解放)
- スキルツリー (特化方向の選択)
- パッシブ効果 (常時発動の能力向上)
- リセット機能 (スキルの振り直し・オプション)

# UXへの寄与

- [成長の実感](../../ux/5fa21c6057d69105.md)
- [専門化](../../ux/5a21deb2f58b3ef2.md)
- [目標設定](../../ux/1f410818921a555e.md)

# ドメイン要素

- [対立と解決](../../domains/conflict-and-resolution.md)
- [目的と成長](../../domains/objectives-and-progression.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [体温/気候適応システム](./temperature.md) の後に実装する。
- [治療/医療システム](./medical.md) の後に実装する。
