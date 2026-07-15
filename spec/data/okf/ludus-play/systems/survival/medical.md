---
type: "Ludus Gameplay System"
title: "治療/医療システム"
description: "ダメージや疾病の治療を通じて、資源管理と計画性を要求する。"
tags:
  - "ludus"
  - "gameplay-system"
  - "survival"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:survival:medical"
genre_id: "genre:survival"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

ダメージや疾病の治療を通じて、資源管理と計画性を要求する。

# 設計思想

『ダメージの永続化』。即時全回復だと緊張感が薄れ、回復不能だと詰む。段階的な回復 (応急処置→薬→休息) で時間とリソースの投資を要求する。

# 主要機能

- 包帯/応急処置 (出血/骨折の治療)
- 薬品 (疾病/毒の治癒)
- 自然回復 (食事と休息で緩やかに)
- 医療設備 (高度な治療は施設が必要)
- 傷の種類 (切り傷/打撲/火傷/感染症)
- 治療アイテムのクラフト (薬草から薬)

# UXへの寄与

- [ダメージの重み](../../ux/276b818530290923.md)
- [予防の価値](../../ux/9c569e2e1801ee7d.md)
- [医療品の確保](../../ux/6fec596303d22e3e.md)

# ドメイン要素

- [対立と解決](../../domains/conflict-and-resolution.md)
- [ルールと状態](../../domains/rules-and-state.md)
- [リソースと経済](../../domains/resources-and-economy.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [敵/脅威システム](./enemy.md) の後に実装する。
